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
		"content": `<style>.d8p07vkgg {
  fill: currentColor;
  d: path("M208 36h-48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-36h28a4 4 0 0 0 0-8h-28v-32h28a4 4 0 0 0 0-8h-28V92h28a4 4 0 0 0 0-8h-28V48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4ZM74.83 29.17a4 4 0 0 0-5.66 0l-32 32A4 4 0 0 0 36 64v144a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V64a4 4 0 0 0-1.17-2.83ZM44 76h24v104H44Zm56 132a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-20h56Zm0-28H76V76h24Zm0-112H44v-2.34l28-28l28 28Z");
}
</style><path class="d8p07vkgg"/>`,
		"fallback": "ph:pencil-ruler-thin",
	});
}

export default Component;
