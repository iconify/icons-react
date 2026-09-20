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
		"content": `<style>.z3zgfybmh {
  fill: currentColor;
  d: path("M4 7.35V9.5q0 .214-.143.357T3.5 10t-.357-.143T3 9.5V3.808q0-.348.23-.578T3.808 3h3.577q.69 0 1.153.463T9 4.615V5.85q0 .466-.37.886q-.368.42-.907.541l.88 2.064q.105.238-.036.449q-.14.21-.41.21q-.14 0-.259-.073q-.12-.073-.186-.208L6.696 7.35zm0-1h3.385q.269 0 .442-.173T8 5.735v-1.12q0-.269-.173-.442T7.385 4H4z");
}
</style><path class="z3zgfybmh"/>`,
		"fallback": "material-symbols-light:r-mobiledata-rounded",
	});
}

export default Component;
