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
		"content": `<style>.eel_tfbwn {
  fill: currentColor;
  d: path("M2.786 8.107C4.936 3.02 10.804.639 15.892 2.788s7.469 8.016 5.32 13.104s-8.016 7.469-13.104 5.32S.637 13.195 2.786 8.107M6 12a6 6 0 1 0 12 0a6 6 0 0 0-12 0m9.686-1.557a4.001 4.001 0 0 1-7.371 3.113a4 4 0 0 1 7.371-3.113M12.01 11H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="eel_tfbwn"/>`,
		"fallback": "coolicons:target-fill-round",
	});
}

export default Component;
