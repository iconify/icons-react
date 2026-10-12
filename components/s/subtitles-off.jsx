import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxtsi0lcq.css';
import '../../css/m/mwxne9ydb.css';
import '../../css/n/nvelfbb4v.css';
import '../../css/q/qylfpj-0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="yxtsi0lcq"/><path class="mwxne9ydb"/><rect class="nvelfbb4v"/><path class="qylfpj-0m"/></g>`,
		"fallback": "andrsrxn:subtitles-off",
	});
}

export default Component;
