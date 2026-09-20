import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d60x365_f.css';
import '../../css/x/xm0m4wb9x.css';
import '../../css/r/r2tvs_tus.css';
import '../../css/i/ioxrwsrea.css';

const viewBox = {"width":228,"height":198};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d60x365_f"/><path class="xm0m4wb9x"/><path class="r2tvs_tus"/><path class="ioxrwsrea"/>`,
		"fallback": "thesvg-color:midudev",
	});
}

export default Component;
