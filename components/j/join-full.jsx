import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0j-_5b5v.css';
import '../../css/b/bcn_4bbos.css';
import '../../css/e/ekzzdgb2f.css';
import '../../css/k/k4-cxey3a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0j-_5b5v"/><path class="bcn_4bbos"/><path class="ekzzdgb2f"/><path class="k4-cxey3a"/>`,
		"fallback": "carbon:join-full",
	});
}

export default Component;
