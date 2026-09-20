import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-ktgtbeo.css';
import '../../css/g/gmg-t4p6n.css';
import '../../css/m/mndpj4b6k.css';
import '../../css/i/iodmegbah.css';
import '../../css/h/hy57fv2jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-ktgtbeo"/><path class="gmg-t4p6n"/><path class="mndpj4b6k"/><path clip-rule="evenodd" class="iodmegbah"/><path class="hy57fv2jl"/>`,
		"fallback": "token:poolx",
	});
}

export default Component;
