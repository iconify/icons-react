import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghgg4x8rk.css';
import '../../css/y/ymi4owbyw.css';
import '../../css/t/tkcwycyff.css';
import '../../css/q/qygy3o62o.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghgg4x8rk"/><path class="ymi4owbyw"/><path class="tkcwycyff"/><path class="qygy3o62o"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:smart-meter-check-48",
	});
}

export default Component;
