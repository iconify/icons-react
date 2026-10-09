import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7068hixw.css';
import '../../css/w/wrndbwbhd.css';
import '../../css/x/xl7e6nsec.css';
import '../../css/z/zmnvrybwh.css';
import '../../css/s/sye-frbjv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7068hixw"/><path class="wrndbwbhd"/><path class="xl7e6nsec"/><path class="zmnvrybwh"/><path class="sye-frbjv"/>`,
		"fallback": "energy-icons:methane-48-bold",
	});
}

export default Component;
