import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2wvh4bzg.css';
import '../../css/s/sf7yaz6nn.css';
import '../../css/o/okalx_bvh.css';
import '../../css/e/euxpybc-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r2wvh4bzg"/><path class="sf7yaz6nn"/><path class="okalx_bvh"/><path class="euxpybc-u"/></g>`,
		"fallback": "lucide-extended:user-round-cog-duotone",
	});
}

export default Component;
