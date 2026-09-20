import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-8aywbvv.css';
import '../../css/s/ss8e_zx0e.css';
import '../../css/m/mqbxjdkgv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-8aywbvv"/><path clip-rule="evenodd" class="ss8e_zx0e"/><path class="mqbxjdkgv"/>`,
		"fallback": "qlementine-icons:rename-16",
	});
}

export default Component;
