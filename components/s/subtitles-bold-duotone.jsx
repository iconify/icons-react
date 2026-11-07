import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2k-dlgsi.css';
import '../../css/d/dtlaqnd5k.css';
import '../../css/z/z66640nvf.css';
import '../../css/v/vdr9l434z.css';
import '../../css/a/a0ycr5bma.css';
import '../../css/u/u6oc6ztij.css';
import '../../css/v/vyjhqsb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2k-dlgsi"/><path class="dtlaqnd5k"/><path class="z66640nvf"/><path class="vdr9l434z"/><path class="a0ycr5bma"/><path class="u6oc6ztij"/><path class="vyjhqsb2w"/>`,
		"fallback": "solar:subtitles-bold-duotone",
	});
}

export default Component;
