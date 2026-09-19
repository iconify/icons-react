import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q_yhtbcoj {
  fill: var(--svg-color--e0e7ec, #e0e7ec);
  d: path("M61.5 31.924C61.5 48.26 48.26 61.5 31.926 61.5S2.352 48.26 2.352 31.924c0-16.332 13.24-29.572 29.574-29.572S61.5 15.592 61.5 31.924");
}

.ur-0hqbqe {
  fill: var(--svg-color--788288, #788288);
  d: path("M16 34.905c-1.436 0-2.598-.847-2.598-1.884c0-1.042 1.166-1.888 2.6-1.888l15.223-.005c1.43 0 2.596.848 2.594 1.887c.002 1.041-1.164 1.887-2.594 1.887z");
}

.wstraeb8x {
  fill: var(--svg-color--98a9b4, #98a9b4);
  d: path("M31.926 0C14.322 0 0 14.321 0 31.926C0 49.529 14.322 63.85 31.926 63.85s31.922-14.319 31.922-31.924S49.529 0 31.926 0m0 57.637c-14.177 0-25.712-11.533-25.712-25.711S17.75 6.216 31.926 6.216s25.709 11.534 25.709 25.71s-11.533 25.711-25.709 25.711");
}

.xfvj1wbty {
  fill: var(--svg-color--85939c, #85939c);
  d: path("M30.05 11.11c0-1.436.846-2.598 1.886-2.598c1.042 0 1.886 1.162 1.886 2.598v21.03c0 1.438-.847 2.598-1.886 2.598c-1.041 0-1.886-1.16-1.886-2.598z");
}
</style><path class="q_yhtbcoj"/><path class="wstraeb8x"/><path class="xfvj1wbty"/><path class="ur-0hqbqe"/>`,
		"fallback": "emojione-v1:nine-oclock",
	});
}

export default Component;
