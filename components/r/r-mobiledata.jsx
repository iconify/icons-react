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
		"content": `<style>.rlqpicc6x {
  fill: currentColor;
  d: path("M3 10V3h4.385q.69 0 1.153.463T9 4.615V5.85q0 .466-.37.886q-.368.42-.907.541L8.885 10H7.846l-1.15-2.65H4V10zm1-3.65h3.385q.269 0 .442-.173T8 5.735v-1.12q0-.269-.173-.442T7.385 4H4z");
}
</style><path class="rlqpicc6x"/>`,
		"fallback": "material-symbols-light:r-mobiledata",
	});
}

export default Component;
