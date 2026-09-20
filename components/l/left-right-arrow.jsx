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
		"content": `<style>.ej4zjipnq {
  fill: var(--svg-color--fff, #fff);
  d: path("M13 9L3 18l10 9zm20 9L23 9v18z");
}

.nry7zqtqb {
  fill: var(--svg-color--fff, #fff);
  d: path("M12 14h12v8H12z");
}

.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="x-kz1kb7j"/><path class="ej4zjipnq"/><path class="nry7zqtqb"/>`,
		"fallback": "twemoji:left-right-arrow",
	});
}

export default Component;
