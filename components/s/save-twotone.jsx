import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udhx9jb5f.css';
import '../../css/v/vzilmrbae.css';
import '../../css/u/um7ec_bhd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udhx9jb5f"/><path class="vzilmrbae"/><path class="um7ec_bhd"/>`,
		"fallback": "ant-design:save-twotone",
	});
}

export default Component;
