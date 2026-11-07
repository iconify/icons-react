import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f7tl7ubma {
  fill: currentColor;
  d: path("m7.706 17.708l-4.999 4.999a.999.999 0 1 1-1.414-1.414l4.999-4.999a16.8 16.8 0 0 1-2.956-4.677A16.8 16.8 0 0 1 2 5c0-.797.314-1.558.879-2.121A3 3 0 0 1 5 2h1c2.253 0 4.118 1.603 4.928 3.629c.351.877.592 1.812.592 2.761c0 .419-.05.84-.177 1.24a2.65 2.65 0 0 1-.636 1.077a1.124 1.124 0 0 0-.181 1.353L21.293 1.293a.999.999 0 1 1 1.414 1.414Zm5.922-3.093c.254-.027.485-.142.665-.322C15.252 13.335 16.683 13 18 13h1c.53 0 1.023.211 1.424.551C21.61 14.555 22 16.522 22 18v1c0 .797-.314 1.558-.879 2.121A3 3 0 0 1 19 22a16.8 16.8 0 0 1-6.617-1.336a17 17 0 0 1-3.097-1.707Z");
}
</style><path class="f7tl7ubma"/>`,
		"fallback": "coolicons:phone-off-fill-round",
	});
}

export default Component;
