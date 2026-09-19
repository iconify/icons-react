import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7ceh0i-d.css';
import '../../css/t/tpz2tpc2u.css';
import '../../css/k/km321-agy.css';
import '../../css/p/pzl2fwqre.css';
import '../../css/y/y81tdp-pd.css';
import '../../css/w/wzztqc65i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7ceh0i-d"/><path class="tpz2tpc2u"/><path class="km321-agy"/><circle class="pzl2fwqre"/><circle class="y81tdp-pd"/><path class="wzztqc65i"/>`,
		"fallback": "flat-color-icons:video-projector",
	});
}

export default Component;
