import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r5tlskk2v.css';
import '../../css/c/c318wxfqg.css';
import '../../css/m/m9zkpabmw.css';
import '../../css/b/bgqoji13c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhr7QBbVO"><g class="ufeehvblu"><path class="r5tlskk2v"/><path class="c318wxfqg"/><path class="m9zkpabmw"/><path class="bgqoji13c"/></g></mask></defs><path mask="url(#SVGhr7QBbVO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:stopwatch-start",
	});
}

export default Component;
