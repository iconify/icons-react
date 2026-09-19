import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mcopcxbjz.css';
import '../../css/f/f4-st3beb.css';
import '../../css/v/veijp88xp.css';
import '../../css/y/ye7rq2zrl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMTklgqzt"><g class="s9cl3zbei"><path clip-rule="evenodd" class="mcopcxbjz"/><path class="f4-st3beb"/><path class="veijp88xp"/><path class="ye7rq2zrl"/></g></mask></defs><path mask="url(#SVGMTklgqzt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:wallet",
	});
}

export default Component;
