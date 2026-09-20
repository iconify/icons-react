import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igyj7usaz.css';
import '../../css/z/zvw71gbdv.css';
import '../../css/x/xgdpk6b-v.css';
import '../../css/m/mat5r6b0u.css';
import '../../css/j/jat_obb8w.css';
import '../../css/l/lbt-dbk5q.css';
import '../../css/q/qgc4glb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igyj7usaz"/><circle class="zvw71gbdv"/><circle class="xgdpk6b-v"/><circle class="mat5r6b0u"/><circle class="jat_obb8w"/><circle class="lbt-dbk5q"/><circle class="qgc4glb0a"/>`,
		"fallback": "prime:server",
	});
}

export default Component;
