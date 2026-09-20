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
		"content": `<style>.qqy0q9anl {
  fill: currentColor;
  d: path("M5 22V12q0-2.125 1.113-3.8T9 5.7V5q0-1.25.875-2.125T12 2t2.125.875T15 5v.7q1.775.825 2.888 2.5T19 12v10zm3-8h6v2h2v-4H8zm3-8.9q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.712T12 4t-.712.288T11 5z");
}
</style><path class="qqy0q9anl"/>`,
		"fallback": "material-symbols:personal-bag-sharp",
	});
}

export default Component;
