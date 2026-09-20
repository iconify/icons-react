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
		"content": `<style>.dfhopgbha {
  fill: currentColor;
  d: path("M56.88 31.93a12 12 0 1 0-17.76 16.14l45.64 50.2l-50.9 50.9A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.85 19.85 0 0 0 14.14-5.86l47.43-47.42l44.87 49.35a12 12 0 1 0 17.76-16.14ZM91 204H52v-39l48.92-48.92l37.18 40.89ZM230.15 70.54l-44.69-44.68a20 20 0 0 0-28.28 0l-36 36a12 12 0 0 0 14.55 18.82L175 120l-.54.53a12 12 0 1 0 17 17l38.67-38.67a20 20 0 0 0 .02-28.32M192 103l-39-39l18.34-18.34l39 39Z");
}
</style><path class="dfhopgbha"/>`,
		"fallback": "ph:pencil-simple-slash-bold",
	});
}

export default Component;
