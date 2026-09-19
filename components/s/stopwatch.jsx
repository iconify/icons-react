import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gbh1v2c4l.css';
import '../../css/t/tx75zlb7g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpL5YBdEZ"><g class="v3_i3wktz"><path class="gbh1v2c4l"/><path class="tx75zlb7g"/></g></mask></defs><path mask="url(#SVGpL5YBdEZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stopwatch",
	});
}

export default Component;
