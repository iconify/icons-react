import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj6erabkr.css';
import '../../css/v/v447u6biz.css';
import '../../css/l/l1qlkdbdw.css';
import '../../css/m/m9v93thfs.css';
import '../../css/i/iu-95obii.css';
import '../../css/m/mlqwlo_yn.css';
import '../../css/h/hnuozoybd.css';
import '../../css/h/hvz_agb9q.css';
import '../../css/g/g-9--euxu.css';
import '../../css/p/pu3n9o-dk.css';
import '../../css/w/wozeujboq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj6erabkr"/><path class="v447u6biz"/><path class="l1qlkdbdw"/><path class="m9v93thfs"/><path class="iu-95obii"/><path class="mlqwlo_yn"/><path class="hnuozoybd"/><path class="hvz_agb9q"/><path class="g-9--euxu"/><path class="pu3n9o-dk"/><path class="wozeujboq"/>`,
		"fallback": "iconito:pad-thai",
	});
}

export default Component;
