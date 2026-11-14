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
		"content": `<style>.f6g4zsqjp {
  d: path("M16 17.75L17.25 19l2.25-2.5");
}

.gwx312vdd {
  d: path("M11.4 19.5H2.5V4h19v8.4");
}

.qmxq0fa5l {
  d: path("m8.75 6.75l1.176 2.882l3.104.227l-2.378 2.009l.743 3.023L8.75 13.25l-2.645 1.641l.743-3.023L4.47 9.859l3.104-.227Zm5.25 11a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gwx312vdd"/><path class="qmxq0fa5l"/><path class="f6g4zsqjp"/></g>`,
		"fallback": "uix-sharp:loyalty-stamp",
	});
}

export default Component;
