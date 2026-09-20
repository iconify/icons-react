import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/odref3f8x.css';
import '../../css/e/erl_wlh6f.css';
import '../../css/y/ynh1yubit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><rect class="odref3f8x"/><rect class="erl_wlh6f"/><rect class="ynh1yubit"/></g>`,
		"fallback": "lets-icons:stat",
	});
}

export default Component;
