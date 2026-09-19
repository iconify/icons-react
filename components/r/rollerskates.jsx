import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsfne-b7l.css';
import '../../css/v/v-2nxdbzn.css';
import '../../css/a/a4p4ujbri.css';
import '../../css/r/rxg13fbqg.css';
import '../../css/j/j4g_4_dng.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoYjg8bbD"><g class="nsfne-b7l"><path class="v-2nxdbzn"/><path class="a4p4ujbri"/><path class="rxg13fbqg"/><path class="j4g_4_dng"/></g></mask></defs><path mask="url(#SVGoYjg8bbD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:rollerskates",
	});
}

export default Component;
