import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihxc3qbho.css';
import '../../css/s/snad-_3mu.css';
import '../../css/h/hgd2feb9j.css';
import '../../css/u/ubh-td2mx.css';
import '../../css/e/e5bk9ac8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihxc3qbho wm-shadow"/><path class="snad-_3mu wm-k"/><path class="hgd2feb9j wm-k"/><path class="ubh-td2mx wm-a"/><path class="e5bk9ac8t wm-a"/>`,
		"fallback": "withicons-pastel:link",
	});
}

export default Component;
