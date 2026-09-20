import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yni9wjbvy.css';
import '../../css/p/ppahphbla.css';
import '../../css/l/luhpwmbsn.css';
import '../../css/m/m9vou0fxn.css';
import '../../css/n/nsuhtqbhu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yni9wjbvy"/><path class="ppahphbla"/><path class="luhpwmbsn"/><path class="m9vou0fxn"/><path class="nsuhtqbhu"/>`,
		"fallback": "thesvg-color:nodewebkit",
	});
}

export default Component;
