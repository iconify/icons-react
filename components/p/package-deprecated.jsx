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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jjymk42xu {
  d: path("m3 7l9 4.5L21 7m-9 4.5v10m3-3.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m.75-2.25l4.5 4.5");
}

.oo3luf3ht {
  d: path("m12.987 21.007l-.204.102q-.182.091-.381.138q-.198.047-.402.047t-.402-.047t-.381-.138l-7.25-3.625q-.108-.054-.208-.123t-.19-.151t-.167-.175t-.141-.197t-.113-.214t-.082-.228q-.033-.116-.049-.237Q3 16.039 3 15.918V8.082q0-.121.017-.241q.016-.121.049-.237q.033-.117.082-.228t.113-.214t.141-.197t.167-.175t.19-.151t.208-.123l7.25-3.625q.182-.091.381-.138q.198-.047.402-.047t.402.047t.381.138l7.25 3.625q.108.054.208.123t.19.151t.167.175t.141.197q.064.103.113.214t.082.228t.049.237q.017.12.017.241v4.954");
}
</style><g class="hntgybcog"><path class="oo3luf3ht"/><path class="jjymk42xu"/></g>`,
		"fallback": "uix:package-deprecated",
	});
}

export default Component;
