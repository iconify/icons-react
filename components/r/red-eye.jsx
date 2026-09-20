import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2dutkr2l.css';
import '../../css/m/m1fn-qbfk.css';
import '../../css/w/wt6hebnha.css';
import '../../css/k/kkrdvddeg.css';
import '../../css/l/larysibsv.css';
import '../../css/s/sn1x08b6h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="u2dutkr2l"/><circle transform="matrix(-1 0 0 1 36 36)" class="m1fn-qbfk"/><path class="wt6hebnha"/><circle class="kkrdvddeg"/><circle class="larysibsv"/><circle class="sn1x08b6h"/>`,
		"fallback": "openmoji:red-eye",
	});
}

export default Component;
