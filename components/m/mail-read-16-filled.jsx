import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tcmv4vb6r {
  fill: currentColor;
  d: path("M7.732 1.078a.5.5 0 0 1 .536 0l4.806 3.058a2 2 0 0 1 .843 1.118L8 8.432L2.086 5.244a2 2 0 0 1 .84-1.108zM2 6.334V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.344L8.237 9.44a.5.5 0 0 1-.474 0z");
}
</style><path class="tcmv4vb6r"/>`,
		"fallback": "fluent:mail-read-16-filled",
	});
}

export default Component;
