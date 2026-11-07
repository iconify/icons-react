import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbwv04xai.css';
import '../../css/y/yeg2qbbsb.css';
import '../../css/j/jjk3i6btk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbwv04xai"/><path class="yeg2qbbsb"/><path class="jjk3i6btk"/>`,
		"fallback": "solar:wad-of-money-bold",
	});
}

export default Component;
