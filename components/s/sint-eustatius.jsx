import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji7fs3brj.css';
import '../../css/m/miixktbff.css';
import '../../css/r/rih_x8brw.css';
import '../../css/s/sugxsql5m.css';
import '../../css/r/rzr1gwbzx.css';
import '../../css/k/kuffcebqs.css';
import '../../css/c/cte3a84au.css';
import '../../css/q/qr6hk6bab.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji7fs3brj"/><path class="miixktbff"/><path class="rih_x8brw"/><path class="sugxsql5m"/><path class="rzr1gwbzx"/><path class="kuffcebqs"/><path class="cte3a84au"/><path class="qr6hk6bab"/>`,
		"fallback": "tabler-flags:sint-eustatius",
	});
}

export default Component;
