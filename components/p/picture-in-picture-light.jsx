import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ykw46sbaw {
  fill: currentColor;
  d: path("M216 50H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14M38 192V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v58h-82a6 6 0 0 0-6 6v66H40a2 2 0 0 1-2-2m178 2h-74v-60h76v58a2 2 0 0 1-2 2");
}
</style><path class="ykw46sbaw"/>`,
		"fallback": "ph:picture-in-picture-light",
	});
}

export default Component;
