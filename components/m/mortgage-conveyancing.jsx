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
		"content": `<style>.ioerjxvjd {
  d: path("m17.866 12.245l.707.707l-2.121 2.121l-.707-.707Zm3.182 3.182l.707.707l-2.121 2.121l-.707-.707ZM18 16l-3.25 3.25m2 2.25h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ynlnedb1r {
  d: path("M12.06 20.5H4v-10l8-7l5.697 4.985M16 7V4h2v4.4m.22 4.905l2.475 2.475l-1.415 1.415l-2.475-2.475Z");
}
</style><g class="ulnmmdpxh"><path class="ynlnedb1r"/><path class="ioerjxvjd"/></g>`,
		"fallback": "uix-sharp:mortgage-conveyancing",
	});
}

export default Component;
