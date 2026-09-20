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
		"content": `<style>.gpg93dbyh {
  fill: currentColor;
  d: path("M178.56 52.93a281 281 0 0 0-48.77-32.51a4 4 0 0 0-3.58 0a281 281 0 0 0-48.77 32.51C45.1 79.88 28 108.61 28 136a52 52 0 0 0 76.46 45.89l-12.29 41A4 4 0 0 0 96 228h64a4 4 0 0 0 3.83-5.15l-12.29-41A52 52 0 0 0 228 136c0-27.39-17.1-56.12-49.44-83.07M176 180a44 44 0 0 1-28.92-10.84a4 4 0 0 0-6.46 4.17l14 46.67h-53.24l14-46.67a4 4 0 0 0-6.46-4.17A44 44 0 0 1 36 136c0-56.06 79-100.56 92-107.49c13 6.93 92 51.38 92 107.49a44.05 44.05 0 0 1-44 44");
}
</style><path class="gpg93dbyh"/>`,
		"fallback": "ph:spade-thin",
	});
}

export default Component;
