import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa9lgcb4p.css';
import '../../css/f/fcr5at8ly.css';
import '../../css/x/x3438ebpm.css';
import '../../css/m/m34fd8bwt.css';
import '../../css/b/bmrsvjbrh.css';
import '../../css/k/k86u2d9jd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa9lgcb4p"/><path clip-rule="evenodd" class="fcr5at8ly"/><path class="x3438ebpm"/><circle class="m34fd8bwt"/><circle class="bmrsvjbrh"/><path class="k86u2d9jd"/>`,
		"fallback": "openmoji:reddit",
	});
}

export default Component;
