import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyac2jmak.css';
import '../../css/z/zavg8bcsl.css';
import '../../css/q/q56o60zyz.css';
import '../../css/q/q174hactj.css';
import '../../css/r/r2c3lfbwa.css';
import '../../css/i/il3m-sbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lyac2jmak"/><path class="zavg8bcsl"/><path class="q56o60zyz"/><path class="q174hactj"/><path class="r2c3lfbwa"/><path class="il3m-sbqt"/></g>`,
		"fallback": "solar:tuning-2-linear",
	});
}

export default Component;
