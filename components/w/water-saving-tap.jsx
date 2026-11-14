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
		"content": `<style>.mtkc1jquu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5H8a4 4 0 0 1 4 4v2H8v-1a1 1 0 0 0-1-1H2.5m3.5-4V3M3.5 3h5m3.408 16.349q-.047.151-.118.293t-.163.271t-.204.242t-.239.207t-.269.167q-.141.072-.292.122q-.151.049-.308.074q-.156.025-.315.025q-.098 0-.196-.01q-.098-.009-.194-.028q-.097-.02-.191-.048q-.094-.029-.184-.066q-.091-.038-.178-.084q-.086-.046-.168-.101t-.158-.117t-.145-.132t-.132-.145t-.117-.158t-.101-.168q-.046-.087-.084-.178q-.037-.09-.066-.184q-.028-.094-.048-.191q-.019-.096-.028-.194T8 18.75c0-1.5.25-2.25 2-4.5c1.258 1.618 1.741 2.46 1.913 3.363M18 14.5v7m-3-3l3 3l3-3");
}
</style><path class="mtkc1jquu"/>`,
		"fallback": "uix-sharp:water-saving-tap",
	});
}

export default Component;
