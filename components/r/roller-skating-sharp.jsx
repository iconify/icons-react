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
		"content": `<style>.uo2gkcbjb {
  fill: currentColor;
  d: path("M4 16V1h8v3H9v1h3v.5q0 .125.013.25t.037.25H9v1h3.4q.35.575.888.975t1.187.6L20 10.1V16zm-1.125 6.125Q2 21.25 2 20t.875-2.125T5 17t2.125.875T8 20t-.875 2.125T5 23t-2.125-.875M19 23q-1.25 0-2.125-.875T16 20t.875-2.125T19 17t2.125.875T22 20t-.875 2.125T19 23m-7 0q-1.25 0-2.125-.875T9 20t.875-2.125T12 17t2.125.875T15 20t-.875 2.125T12 23");
}
</style><path class="uo2gkcbjb"/>`,
		"fallback": "material-symbols:roller-skating-sharp",
	});
}

export default Component;
