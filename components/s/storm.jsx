import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivjvz2eii.css';
import '../../css/z/zxdorvfhs.css';
import '../../css/w/wn6k-hbqx.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y555eiryf.css';
import '../../css/a/a0_8-cfnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGzgw7CdPx" width="12" height="15" x="6" y="8" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="zxdorvfhs"/><path class="wn6k-hbqx"/></mask><g class="ft5dv1b6b"><path mask="url(#SVGzgw7CdPx)" class="y555eiryf"/><path clip-rule="evenodd" class="a0_8-cfnk"/></g>`,
		"fallback": "lets-icons:storm",
	});
}

export default Component;
