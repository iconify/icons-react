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
		"content": `<style>.kzi381b6z {
  d: path("M10.5 13h3v7h-3Zm-4 8.5h11");
}

.ljq-dt95q {
  d: path("m3.877 4.092l14.854-2.087l1.392 9.903l-14.854 2.087Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xxu19bcdx {
  fill: currentColor;
  d: path("m12 4.5l.882 2.286l2.447.132l-1.902 1.546l.63 2.368L12 9.5l-2.057 1.332l.63-2.368l-1.902-1.546l2.447-.132Z");
}
</style><g class="ulnmmdpxh"><path class="ljq-dt95q"/><path class="kzi381b6z"/><path class="xxu19bcdx"/></g>`,
		"fallback": "uix-sharp:loyalty-kiosk",
	});
}

export default Component;
