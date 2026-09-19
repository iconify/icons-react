import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/saxe4ccch.css';
import '../../css/v/vi54ztb5j.css';
import '../../css/q/qx4y48btg.css';
import '../../css/h/hk57nrpof.css';
import '../../css/r/r8bjcrbby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="saxe4ccch"/><path clip-rule="evenodd" class="vi54ztb5j"/><path clip-rule="evenodd" class="qx4y48btg"/><path class="hk57nrpof"/><path class="r8bjcrbby"/></g>`,
		"fallback": "icon-park:trophy",
	});
}

export default Component;
