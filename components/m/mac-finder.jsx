import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x_ufqn_db.css';
import '../../css/m/mmh40onkh.css';
import '../../css/m/mk2bqkhul.css';
import '../../css/g/g3tsi4b-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGL6Ewb6wG"><g class="wwvp95byt"><path class="x_ufqn_db"/><path class="mmh40onkh"/><path class="mk2bqkhul"/><path class="g3tsi4b-e"/></g></mask></defs><path mask="url(#SVGL6Ewb6wG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:mac-finder",
	});
}

export default Component;
