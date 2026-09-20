import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zpqhrbbhm {
  fill: currentColor;
  d: path("M8.237 1.56a.5.5 0 0 0-.474 0L1.789 4.777a1.5 1.5 0 0 0-.57.54l.022.012l.03.014l.278.15L8 8.933l.567-.302a3 3 0 0 1 5.091-2.715l1.123-.6a1.5 1.5 0 0 0-.57-.54zM1 6.333l.078.042l6.78 3.642a.305.305 0 0 1 .084.47l-.294.333l-.01.012A2.5 2.5 0 0 0 7 12.5c0 .512.118 1.027.367 1.5H3a2 2 0 0 1-2-2zM13.5 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S8 13.75 8 12.5A1.5 1.5 0 0 1 9.5 11h4a1.5 1.5 0 0 1 1.5 1.5");
}
</style><path class="zpqhrbbhm"/>`,
		"fallback": "fluent:mail-open-person-16-filled",
	});
}

export default Component;
