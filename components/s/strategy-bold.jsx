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
		"content": `<style>.lrn048b5z {
  fill: currentColor;
  d: path("M80 144a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16m-32-72a12 12 0 0 1-8.49-20.49L51 96L39.51 84.49a12 12 0 0 1 17-17L68 79l11.51-11.49a12 12 0 0 1 17 17L85 96l11.52 11.51a12 12 0 0 1-17 17L68 113l-11.51 11.49A12 12 0 0 1 48 128m184.49 75.51a12 12 0 0 1-17 17L204 209l-11.51 11.52a12 12 0 0 1-17-17L187 192l-11.52-11.51a12 12 0 0 1 17-17L204 175l11.51-11.52a12 12 0 0 1 17 17L221 192Zm-43.4-92.62c-5.21 23-23.33 43.53-45.09 51.22a12 12 0 1 1-8-22.63c14.07-5 26.27-18.91 29.67-33.9c2.37-10.46.4-20.84-5.68-30.54v9a12 12 0 0 1-24 0V44a12 12 0 0 1 12-12h40a12 12 0 0 1 0 24H176c12.77 16.61 17.42 35.76 13.09 54.89");
}
</style><path class="lrn048b5z"/>`,
		"fallback": "ph:strategy-bold",
	});
}

export default Component;
