import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/r/rylpg2bjs.css';
import '../../css/n/nvhce-17r.css';
import '../../css/h/h4w5yibsn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2xp85cjc"><g class="wqznn1ydc"><path class="rylpg2bjs"/><path class="nvhce-17r"/><path class="h4w5yibsn"/></g></mask></defs><path mask="url(#SVG2xp85cjc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:spikedshoes",
	});
}

export default Component;
