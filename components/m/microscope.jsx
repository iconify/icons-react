import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/ezq3zxkis.css';
import '../../css/p/phraqqbtz.css';
import '../../css/m/mv7_v6hps.css';
import '../../css/q/q8f8vcygc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiDDIqcbb"><g class="rohhhzb0l"><path class="ezq3zxkis"/><path clip-rule="evenodd" class="phraqqbtz"/><path class="mv7_v6hps"/><path class="q8f8vcygc"/></g></mask></defs><path mask="url(#SVGiDDIqcbb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:microscope",
	});
}

export default Component;
