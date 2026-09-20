import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ji_k_ktap {
  fill: var(--svg-color--664500, #664500);
  d: path("M27.335 21.629a.5.5 0 0 0-.635-.029c-.039.029-3.922 2.9-8.7 2.9c-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 0 0-.729.657C8.7 22.472 11.788 27.5 18 27.5s9.301-5.028 9.429-5.243a.5.5 0 0 0-.094-.628M7.999 15a1 1 0 0 1-.893-1.448C7.158 13.448 8.424 11 12 11s4.842 2.449 4.894 2.553a1 1 0 0 1-1.783.906C15.068 14.379 14.281 13 12 13c-2.317 0-3.099 1.433-3.106 1.447a1 1 0 0 1-.895.553m20.002 0a1 1 0 0 1-.896-.553C27.08 14.401 26.299 13 24 13s-3.08 1.401-3.112 1.46c-.26.481-.859.67-1.345.42a.994.994 0 0 1-.438-1.328C19.157 13.449 20.423 11 24 11s4.843 2.449 4.895 2.553A1 1 0 0 1 28.001 15");
}

.kj0pf60du {
  cx: 7px;
  cy: 18px;
  r: 5px;
  fill: var(--svg-color--ff7892, #ff7892);
}

.m6p13_k8l {
  cx: 29px;
  cy: 18px;
  r: 5px;
  fill: var(--svg-color--ff7892, #ff7892);
}

.ngpmpqbbo {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18");
}
</style><path class="ngpmpqbbo"/><circle class="kj0pf60du"/><circle class="m6p13_k8l"/><path class="ji_k_ktap"/>`,
		"fallback": "twemoji:smiling-face-with-smiling-eyes",
	});
}

export default Component;
