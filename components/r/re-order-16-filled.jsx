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
		"content": `<style>.z1pohglyh {
  fill: currentColor;
  d: path("M2.75 9.25h10.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zh10.5zm0-4h10.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zh10.5z");
}
</style><path class="z1pohglyh"/>`,
		"fallback": "fluent:re-order-16-filled",
	});
}

export default Component;
