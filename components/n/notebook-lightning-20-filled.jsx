import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.isihbi0zu {
  fill: currentColor;
  d: path("M5 2a2 2 0 0 0-2 2v6.404l.2-.48A1.5 1.5 0 0 1 4.586 9h3.473a1.5 1.5 0 0 1 1.423 1.974l-.349 1.047c1.393.215 2.001 1.991.911 3.008L6.861 18H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM16 6h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16zm0 3.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16zm0 3.5h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16zM2.502 16h1.75l-.59 2.36c-.12.482.463.826.827.486l4.872-4.548A.75.75 0 0 0 8.85 13H7.752l.781-2.342A.5.5 0 0 0 8.06 10H4.586a.5.5 0 0 0-.462.308l-2.083 5a.5.5 0 0 0 .461.692");
}
</style><path class="isihbi0zu"/>`,
		"fallback": "fluent:notebook-lightning-20-filled",
	});
}

export default Component;
